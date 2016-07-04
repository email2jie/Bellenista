class Api::ProductCategoriesController < ApplicationController
  def index
    @categories = ProductCategory.all
  end
  def create
    @category = ProductCategory.new(category_params)

    if(@category.save)
      render :show
    else
     render json: @category.errors, status: 422 
    end



  end

  def destroy
    @category = ProductCategory.find(params[:id])
    if(@category.destroy)
      render "/api/product_categories/show", status: 200
    else
      @errors = @product.errors.full_messages
      render "/api/shared/error", status: 422
    end
  end

  def category_params
    params.require(:category).permit(:name)
  end

end
