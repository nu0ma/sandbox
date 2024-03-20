package main

import (
	"fmt"
	"log"
	"regexp"
	"strings"

	"github.com/PuerkitoBio/goquery"
)

type Entity struct {
	AuthorID string
	Author   string
	TitleID  string
	Title    string
	InfoURL  string
	ZipURL   string
}

func findEntries(siteURL string) ([]Entity, error) {
	doc, err := goquery.NewDocument(siteURL)

	if err != nil {
		return nil, err
	}

	pat := regexp.MustCompile(`.*/cards/([0-9]+)/card([0-9]+).html$`)

	doc.Find("ol li a").Each(func(i int, s *goquery.Selection) {
		token := pat.FindStringSubmatch(s.AttrOr("href", ""))
		if len(token) != 3 {
			return
		}
		pageURL := fmt.Sprintf("https://www.aozora.gr.jp/cards/%s/card%s.html", token[1], token[2])
		author, zipURL := findAuthorAndZIP(pageURL)

		println(author, zipURL)
	})

	return nil, nil

}

func findAuthorAndZIP(siteURL string) (string, string) {
	doc, err := goquery.NewDocument(siteURL)
	if err != nil {
		return "", ""
	}

	author := doc.Find("table[summary=作家データ] tr:nth-child(1) td:nth-child(2) ").Text()

	zipURL := ""
	doc.Find("table.download a").Each(func(i int, s *goquery.Selection) {
		href := s.AttrOr("href", "")
		if strings.HasSuffix(href, ".zip") {
			zipURL = href
		}
	})

	return author, zipURL
}

func main() {
	listURL := "https://www.aozora.gr.jp/index_pages/person879.html"

	entries, err := findEntries(listURL)
	if err != nil {
		log.Fatal(err)
	}

	for _, entry := range entries {
		fmt.Println(entry.Title, entry.ZipURL)
	}
}
