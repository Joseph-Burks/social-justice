class UsersController < ApplicationController
    skip_before_action :verify_authenticity_token

    def index
        users = User.all
        render json: users
    end

    def show
        user = User.find_by(id: params[:id])
        render json: user, include: [:games]
    end

    def show_alt
        user = User.where({username: params[:username]})
        render json: user, include: [:games]
    end

    def create
        new_user = User.create({username: params[:username], password: params[:password]})
        render json: new_user, include: [:games]
    end

end