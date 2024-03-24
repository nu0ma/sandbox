package gateway

import (
	"context"
	"reflect"
	"testing"

	"github.com/golang/mock/gomock"
	"github.com/nu0ma/sandbox/go-playground/trial-echo/domain"
	"github.com/nu0ma/sandbox/go-playground/trial-echo/driver/dao"
	mock_dao "github.com/nu0ma/sandbox/go-playground/trial-echo/mock/driver/dao"
)

func TestUserGateway_GetUsers(t *testing.T) {
	ctrl := gomock.NewController(t)
	defer ctrl.Finish()

	mockQuerier := mock_dao.NewMockQuerier(ctrl)
	mockQuerier.EXPECT().GetUsers(gomock.Any()).Return([]dao.User{
		{
			Name:  "test1",
			Email: "hoge2@example.com",
		},
		{
			Name:  "test2",
			Email: "hoge2@example.com",
		},
	}, nil)

	type fields struct {
		driver dao.Querier
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
			name: "success",
			fields: fields{
				driver: mockQuerier,
			},
			args: args{
				ctx: context.Background(),
			},
			want: &[]domain.User{
				{
					Name:  "test1",
					Email: "hoge2@example.com",
				},
				{
					Name:  "test2",
					Email: "hoge2@example.com",
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
