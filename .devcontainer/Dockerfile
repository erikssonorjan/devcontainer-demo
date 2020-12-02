ARG VERSION="12"
FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:0-${VERSION}

ARG USERNAME="root"
COPY ./aliases.sh /
RUN [ "/bin/bash", "-c", "echo 'source /aliases.sh' >> /home/$USERNAME/.bashrc && bash" ]