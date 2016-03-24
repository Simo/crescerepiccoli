class ComitatomammeController < ApplicationController
  def index
    @post = Post.new(tipo: 'comitatomamme')
    @posts = Post.by_type('comitatomamme').most_recent(3)
  end
end
