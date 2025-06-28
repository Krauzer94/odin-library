set quiet

_default:
    just --list

# Build the container image
build:
    #!/usr/bin/env bash

    podman build -t live-server .

# Activate container image
run:
    #!/usr/bin/env bash

    podman run --rm -p 5501:5501 -v $(pwd):/app live-server

# Build and activate container
deploy:
    #!/usr/bin/env bash

    just build
    just run
