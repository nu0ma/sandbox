package usecase

import (
	"reflect"
	"testing"

	"github.com/golang/mock/gomock"
	"github.com/labstack/echo/v4"
	"github.com/nu0ma/sandbox/go-playground/trial-echo/domain"
	mock_port "github.com/nu0ma/sandbox/go-playground/trial-echo/mock/port"
	"github.com/nu0ma/sandbox/go-playground/trial-echo/port"
)

func TestTodoUsecase_GetTodo(t *testing.T) {
	ctrl := gomock.NewController(t)
	defer ctrl.Finish()

	mockPort := mock_port.NewMockTodoPort(ctrl)
	mockPort.EXPECT().GetTodo(gomock.Any()).Return(&domain.Todo{
		Title: "title",
	}, nil)

	type fields struct {
		port port.TodoPort
	}

	type args struct {
		ctx echo.Context
	}

	tests := []struct {
		name    string
		fields  fields
		args    args
		want    *domain.Todo
		wantErr bool
	}{
		{
			name: "get todo",
			fields: fields{
				port: mockPort,
			},
			args: args{
				ctx: echo.New().NewContext(nil, nil),
			},
			want: &domain.Todo{
				Title: "title",
			},
			wantErr: false,
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			u := &TodoUsecase{
				port: tt.fields.port,
			}
			got, err := u.GetTodo(tt.args.ctx)
			if (err != nil) != tt.wantErr {
				t.Errorf("TodoUsecase.GetTodo() error = %v, wantErr %v", err, tt.wantErr)
				return
			}
			if !reflect.DeepEqual(got, tt.want) {
				t.Errorf("TodoUsecase.GetTodo() = %v, want %v", got, tt.want)
			}
		})
	}
}
