class Reactor < ApplicationRecord
  has_many :culture
  has_many :culture_logs, dependent: :destroy
end
