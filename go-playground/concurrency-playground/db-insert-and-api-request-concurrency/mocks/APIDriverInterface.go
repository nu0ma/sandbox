// Code generated by mockery v2.42.2. DO NOT EDIT.

package mocks

import mock "github.com/stretchr/testify/mock"

// APIDriverInterface is an autogenerated mock type for the APIDriverInterface type
type APIDriverInterface struct {
	mock.Mock
}

type APIDriverInterface_Expecter struct {
	mock *mock.Mock
}

func (_m *APIDriverInterface) EXPECT() *APIDriverInterface_Expecter {
	return &APIDriverInterface_Expecter{mock: &_m.Mock}
}

// Post provides a mock function with given fields:
func (_m *APIDriverInterface) Post() error {
	ret := _m.Called()

	if len(ret) == 0 {
		panic("no return value specified for Post")
	}

	var r0 error
	if rf, ok := ret.Get(0).(func() error); ok {
		r0 = rf()
	} else {
		r0 = ret.Error(0)
	}

	return r0
}

// APIDriverInterface_Post_Call is a *mock.Call that shadows Run/Return methods with type explicit version for method 'Post'
type APIDriverInterface_Post_Call struct {
	*mock.Call
}

// Post is a helper method to define mock.On call
func (_e *APIDriverInterface_Expecter) Post() *APIDriverInterface_Post_Call {
	return &APIDriverInterface_Post_Call{Call: _e.mock.On("Post")}
}

func (_c *APIDriverInterface_Post_Call) Run(run func()) *APIDriverInterface_Post_Call {
	_c.Call.Run(func(args mock.Arguments) {
		run()
	})
	return _c
}

func (_c *APIDriverInterface_Post_Call) Return(_a0 error) *APIDriverInterface_Post_Call {
	_c.Call.Return(_a0)
	return _c
}

func (_c *APIDriverInterface_Post_Call) RunAndReturn(run func() error) *APIDriverInterface_Post_Call {
	_c.Call.Return(run)
	return _c
}

// NewAPIDriverInterface creates a new instance of APIDriverInterface. It also registers a testing interface on the mock and a cleanup function to assert the mocks expectations.
// The first argument is typically a *testing.T value.
func NewAPIDriverInterface(t interface {
	mock.TestingT
	Cleanup(func())
}) *APIDriverInterface {
	mock := &APIDriverInterface{}
	mock.Mock.Test(t)

	t.Cleanup(func() { mock.AssertExpectations(t) })

	return mock
}