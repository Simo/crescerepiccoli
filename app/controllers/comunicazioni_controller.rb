class ComunicazioniController < ApplicationController
  def index
    @post = Post.new(tipo: 'comunicazioni')
    @posts = Post.by_type('comunicazioni').most_recent(10)
  end
end
