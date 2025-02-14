class Reactor < ApplicationRecord
  belongs_to :microorganism
  belongs_to :culture

  has_many :culture_logs, dependent: :destroy

  validates :start_date, presence: true
  validates :end_date, presence: true
end
