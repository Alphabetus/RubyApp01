# Load the Rails application.
require_relative 'application'

# Initialize the Rails application.
Rails.application.initialize!

ActionMailer::Base.smtp_settings = {
  address: 'mail.privateemail.com',
  port: '465',
  authentication: :plain,
  user_name: ENV['EMAIL_USERNAME'],
  password: ENV['EMAIL_PASSWORD'],
  enable_starttls_auto: false,
  ssl: true
}
