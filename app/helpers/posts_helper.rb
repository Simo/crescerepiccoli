module PostsHelper

  def class_for element
    if @post.tipo == 'comitatomamme'
      "#{element} pink"
    else
      element
    end
  end

end
