class ResultsController < ApplicationController
  def show
    key = Figaro.env.GR_API_KEY
    terms = params[:q]
    @results = HTTParty.get("https://www.goodreads.com/search.xml?key=#{key}&q=#{terms}")
    render json: @results, status: :ok
  end
end