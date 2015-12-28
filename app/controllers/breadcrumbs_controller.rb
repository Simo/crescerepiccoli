class BreadcrumbsController < ApplicationController
  before_action :set_breadcrumb, only: [:show, :edit, :update, :destroy]

  # GET /breadcrumbs
  # GET /breadcrumbs.json
  def index
    @breadcrumbs = Breadcrumb.all
  end

  # GET /breadcrumbs/1
  # GET /breadcrumbs/1.json
  def show
  end

  # GET /breadcrumbs/new
  def new
    @breadcrumb = Breadcrumb.new
  end

  # GET /breadcrumbs/1/edit
  def edit
  end

  # POST /breadcrumbs
  # POST /breadcrumbs.json
  def create
    @breadcrumb = Breadcrumb.new(breadcrumb_params)

    respond_to do |format|
      if @breadcrumb.save
        format.html { redirect_to @breadcrumb, notice: 'Breadcrumb was successfully created.' }
        format.json { render :show, status: :created, location: @breadcrumb }
      else
        format.html { render :new }
        format.json { render json: @breadcrumb.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /breadcrumbs/1
  # PATCH/PUT /breadcrumbs/1.json
  def update
    respond_to do |format|
      if @breadcrumb.update(breadcrumb_params)
        format.html { redirect_to @breadcrumb, notice: 'Breadcrumb was successfully updated.' }
        format.json { render :show, status: :ok, location: @breadcrumb }
      else
        format.html { render :edit }
        format.json { render json: @breadcrumb.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /breadcrumbs/1
  # DELETE /breadcrumbs/1.json
  def destroy
    @breadcrumb.destroy
    respond_to do |format|
      format.html { redirect_to breadcrumbs_url, notice: 'Breadcrumb was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_breadcrumb
      @breadcrumb = Breadcrumb.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def breadcrumb_params
      params.require(:breadcrumb).permit(:title, :menu_item_id, :visible, :active)
    end
end
