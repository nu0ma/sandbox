package usecase

import (
	"db-insert-and-api-request-concurrency/driver"
	"db-insert-and-api-request-concurrency/mocks"
	"testing"
)

func TestRegisterUsecase_Register(t *testing.T) {
	mockDBDriver := mocks.NewDBDriverInterface(t)
	mockAPIDriver := mocks.NewAPIDriverInterface(t)

	mockDBDriver.EXPECT().Post().Return(nil)
	mockAPIDriver.EXPECT().Post().Return(nil)

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
		{
			name: "Test Register",
			fields: fields{
				dbDriver:  mockDBDriver,
				apiDriver: mockAPIDriver,
			},
			args: args{
				done: make(chan interface{}),
			},
			wantErr: false,
		},
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
