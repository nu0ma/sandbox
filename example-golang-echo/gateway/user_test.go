package gateway

import (
	"reflect"
	"testing"

	"github.com/golang/mock/gomock"
	"github.com/labstack/echo/v4"
	"github.com/nu0ma/sandbox/go-playground/trial-echo/domain"
	"github.com/nu0ma/sandbox/go-playground/trial-echo/driver"
	mock_driver "github.com/nu0ma/sandbox/go-playground/trial-echo/mock/driver"
)

func TestUserGateway_GetUsers(t *testing.T) {
	ctrl := gomock.NewController(t)
	defer ctrl.Finish()

	mockDriver := mock_driver.NewMockIDBDriver(ctrl)
	mockDriver.EXPECT().GetUsers().Return(
		driver.UsersResponse{
			{
				Name: "hoge",
			},
			{
				Name: "fuga",
			},
		}, nil,
	)

	type fields struct {
		driver driver.IDBDriver
	}

	type args struct {
		ctx echo.Context
	}

	tests := []struct {
		name    string
		fields  fields
		args    args
		want    *[]domain.User
		wantErr bool
	}{
		{
			name: "get users",
			fields: fields{
				driver: mockDriver,
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
			g := UserGateway{
				driver: tt.fields.driver,
			}
			got, err := g.GetUsers(tt.args.ctx)
			if (err != nil) != tt.wantErr {
				t.Errorf("UserGateway.GetUsers() error = %v, wantErr %v", err, tt.wantErr)
				return
			}
			if !reflect.DeepEqual(got, tt.want) {
				t.Errorf("UserGateway.GetUsers() = %v, want %v", got, tt.want)
			}
		})
	}
}
