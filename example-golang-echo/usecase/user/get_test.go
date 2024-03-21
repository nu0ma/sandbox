package usecase

import (
	"reflect"
	"testing"

	"github.com/golang/mock/gomock"
	"github.com/labstack/echo/v4"
	"github.com/nu0ma/sandbox/go-playground/trial-echo/domain"
	mock_port "github.com/nu0ma/sandbox/go-playground/trial-echo/mock/port/user"
	"github.com/nu0ma/sandbox/go-playground/trial-echo/port"
)

func TestUserUsecase_GetUsers(t *testing.T) {
	ctrl := gomock.NewController(t)
	defer ctrl.Finish()

	mockPort := mock_port.NewMockUserPort(ctrl)
	mockPort.EXPECT().GetUsers(gomock.Any()).Return(
		&[]domain.User{
			{
				Name: "hoge",
			},
			{
				Name: "fuga",
			},
		}, nil,
	)

	type fields struct {
		port port.UserPort
	}

	type args struct {
		ctx echo.Context
	}

	tests := []struct {
		name    string
		args    args
		fields  fields
		want    *[]domain.User
		wantErr bool
	}{
		{
			name: "get user",
			fields: fields{
				port: mockPort,
			},
			args: args{
				ctx: echo.New().NewContext(nil, nil),
			},
			want: &[]domain.User{
				{
					Name: "hoge",
				},
				{
					Name: "fuga",
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
