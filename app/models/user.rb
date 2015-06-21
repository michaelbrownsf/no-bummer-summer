class User < ActiveRecord::Base
  has_secure_password
  has_many :posts
  has_many :user_activities
  has_many :activities, :through => :user_activities
end
