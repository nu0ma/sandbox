package usecase

import (
	"db-insert-and-api-request-concurrency/mocks"
	"errors"
	"testing"
)

func TestRegisterUsecase_Register(t *testing.T) {

	type fields struct {
		dbReturn  error
		apiReturn error
	}
	type args struct {
		done <-chan interface{}
	}
	tests := []struct {
		name      string
		fields    fields
		args      args
		wantErr   bool
		dbReturn  error
		apiReturn error
	}{
		{
			name:      "Test Register",
			fields:    fields{dbReturn: nil, apiReturn: nil},
			args:      args{done: make(chan interface{})},
			wantErr:   false,
			dbReturn:  nil,
			apiReturn: nil,
		},
		{
			name:      "Test Register with error",
			fields:    fields{dbReturn: errors.New("error"), apiReturn: nil},
			args:      args{done: make(chan interface{})},
			wantErr:   true,
			dbReturn:  errors.New("error"),
			apiReturn: nil,
		},
		{
			name:      "Test Register with error",
			fields:    fields{dbReturn: nil, apiReturn: errors.New("error")},
			args:      args{done: make(chan interface{})},
			wantErr:   true,
			dbReturn:  nil,
			apiReturn: errors.New("error"),
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {

			mockDBDriver := mocks.NewDBDriverInterface(t)
			mockAPIDriver := mocks.NewAPIDriverInterface(t)

			mockDBDriver.EXPECT().Post().Return(tt.fields.dbReturn)
			mockAPIDriver.EXPECT().Post().Return(tt.apiReturn)

			u := &RegisterUsecase{
				dbDriver:  mockDBDriver,
				apiDriver: mockAPIDriver,
			}
			if err := u.Register(tt.args.done); (err != nil) != tt.wantErr {
				t.Errorf("RegisterUsecase.Register() error = %v, wantErr %v", err, tt.wantErr)
			}
		})
	}
}
