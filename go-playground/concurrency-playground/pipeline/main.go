package main

type AccessLog struct {
	UserId string
	Name   string
}

type ContractInfo struct {
	ContractId string
	Name       string
}

func main() {
	accessLogs := []AccessLog{
		{UserId: "1", Name: "Alice"},
		{UserId: "2", Name: "Bob"},
		{UserId: "3", Name: "Charlie"},
	}

	contractInfos := []ContractInfo{
		{ContractId: "1", Name: "Alice"},
		{ContractId: "2", Name: "Bob"},
	}

}
