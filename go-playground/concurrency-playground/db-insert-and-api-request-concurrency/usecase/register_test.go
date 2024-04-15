package usecase

import (
	"db-insert-and-api-request-concurrency/driver"
	"testing"
)

func TestRegisterUsecase_Register(t *testing.T) {
	// TODO
	type fields struct {
		dbDriver  driver.DBDriverInterface
		apiDriver driver.APIDriverInterface
	}
	type args struct {
		done <-chan interface{}
	}
	tests := []struct {
		name    string
		fields  fields
		args    args
		wantErr bool
	}{
		// TODO: Add test cases.
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			u := &RegisterUsecase{
				dbDriver:  tt.fields.dbDriver,
				apiDriver: tt.fields.apiDriver,
			}
			if err := u.Register(tt.args.done); (err != nil) != tt.wantErr {
				t.Errorf("RegisterUsecase.Register() error = %v, wantErr %v", err, tt.wantErr)
			}
		})
	}
}
