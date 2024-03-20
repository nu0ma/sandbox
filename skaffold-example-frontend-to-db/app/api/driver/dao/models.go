// Code generated by sqlc. DO NOT EDIT.
// versions:
//   sqlc v1.16.0

package dao

import (
	"database/sql"
)

type Organization struct {
	ID   int32  `json:"id"`
	Name string `json:"name"`
}

type User struct {
	ID             int32         `json:"id"`
	Name           string        `json:"name"`
	Age            int32         `json:"age"`
	OrganizationID sql.NullInt32 `json:"organization_id"`
}
