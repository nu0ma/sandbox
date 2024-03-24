package usecase

import (
	"context"
	"reflect"
	"testing"

	"github.com/golang/mock/gomock"
	"github.com/nu0ma/sandbox/go-playground/trial-echo/domain"
	mock_port "github.com/nu0ma/sandbox/go-playground/trial-echo/mock/port"
	"github.com/nu0ma/sandbox/go-playground/trial-echo/port"
)

func TestUserUsecase_GetUsers(t *testing.T) {
	ctrl := gomock.NewController(t)
	defer ctrl.Finish()

	mock_port := mock_port.NewMockUserPort(ctrl)
	mock_port.EXPECT().GetUsers(gomock.Any()).Return(&[]domain.User{
		{
			Name:  "test1",
			Email: "",
		},
		{
			Name:  "test2",
			Email: "",
		},
	}, nil)

	type fields struct {
		port port.UserPort
	}
	type args struct {
		ctx context.Context
	}
	tests := []struct {
		name    string
		fields  fields
		args    args
		want    *[]domain.User
		wantErr bool
	}{
		{
			name: "",
			fields: fields{
				port: mock_port,
			},
			args: args{
				ctx: context.Background(),
			},
			want: &[]domain.User{
				{
					Name:  "test1",
					Email: "",
				},
				{
					Name:  "test2",
					Email: "",
				},
			},
			wantErr: false,
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			u := &UserUsecase{
				port: tt.fields.port,
			}
			got, err := u.GetUsers(tt.args.ctx)
			if (err != nil) != tt.wantErr {
				t.Errorf("UserUsecase.GetUsers() error = %v, wantErr %v", err, tt.wantErr)
				return
			}
			if !reflect.DeepEqual(got, tt.want) {
				t.Errorf("UserUsecase.GetUsers() = %v, want %v", got, tt.want)
			}
		})
	}
}
