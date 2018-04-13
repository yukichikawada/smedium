class User < ApplicationRecord
  validates :username, :email, :password_digest, :session_token, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }

  before_validation :ensure_token

  attr_reader :password

  has_many :comments
  has_many :likes
  
  has_many :liked_stories,
    through: :likes,
    source: :story

  has_many :stories,
    foreign_key: :author_id,
    class_name: 'Story'

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user && user.is_password?(password)
    user
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_token
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end

  private

  def ensure_token
    self.session_token = SecureRandom.urlsafe_base64
  end
end
