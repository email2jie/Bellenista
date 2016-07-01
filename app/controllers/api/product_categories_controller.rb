class Api::ProductCategoriesController < ApplicationController
  def index
    
  end
  def create
    @category = ProductCategory.new(category_params)

    if(@category.save)
      render :show
    else
      
    end



  end

  def destroy
  end

  def category_params
    params.require(:category).permit(:name)
  end

end
