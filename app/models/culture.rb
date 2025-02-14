class Culture < ApplicationRecord
  has_many :reactors
  has_many :microorganisms
  has_many :culture_logs
end
