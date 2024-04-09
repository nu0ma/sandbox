package apperrors

type ErrCode string

const (
	Unknown        ErrCode = "U000"
	FindDataFailed ErrCode = "F001"
	NAData         ErrCode = "F002"
)
