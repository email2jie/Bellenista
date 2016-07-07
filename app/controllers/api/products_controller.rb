class Api::ProductsController < ApplicationController

  def index
    @products = Product.all
    render :index
  end

  def show
    @product = Product.find(params[:id])
    render :show
  end

  def create
    @product = Product.new(product_params)
    if(@product.save)
      render :show
    else
      #@errors = @product.errors.full_messages
      render json: @product.errors, status: 422
    end 
  end

  def edit
  end

  def update
    @product = Product.find(params[:id])
    @img = Image.find(params[:product][:image_id])
    @product.images.delete_all
    @product.images << @img
    if @product.update(product_params)
      render :show
    else
      render json: @product.errors, status: 422
    end
  end

  def destroy
    @product = Product.find(params[:id])
    if(@product.destroy)
      render "/api/products/show", status: 200
    else
      @errors = @product.errors.full_messages
      render "api/shared/error", status: 422
    end
  end

  def product_params
    params.require(:product).permit(:name, :SKU, :price, :stock, :description, :image_id, category_ids: [])
  end


end
