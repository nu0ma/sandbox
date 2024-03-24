mockgen:	mockgen-driver mockgen-port

mockgen-driver:
	mockgen -source=driver/dao/querier.go -destination=mock/driver/dao/mock.go

mockgen-port:
	@for file in $$(find port -type f -name '*.go' ! -path "port/mock/*"); do \
		dir=$$(dirname $$file); \
		base=$$(basename $$file .go); \
		mockgen -source=$$file -destination=mock/port/$$dir/mock/$$base.go; \
		mkdir -p $$dir/mock/$$base; \
		echo "Generating mock for $$file"; \
	done
