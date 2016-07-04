class Api::CategoryListingsController < ApplicationController
  def index
    @category_listings = CategoryListing.all
  end

  def create
    @category_listing = CategoryListing.new(category_listing_params)
    if(@category_listing.save)
      render :show
    else
      render json: @category_listing.errors, status: 422
    end
  end

  def destroy
    @category_listing = CategoryListing.find(params[:id])
    if(@category_listing.destroy)
      render "/api/category_listings/show", status: 200
    else
      @errors = @category_listing.errors.full_messages
      render "/api/shared/error", status: 422
    end
  end

  def category_listing_params
    params.require(:cat_list).permit(:productId, :categoryId)
  end
end
