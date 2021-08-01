FROM gitpod/workspace-postgres
FROM gitpod/workspace-full

# Install Redis.
RUN sudo apt-get update  && sudo apt-get install -y   redis-server  && sudo rm -rf /var/lib/apt/lists/*

COPY scripts/.bash_aliases $HOME