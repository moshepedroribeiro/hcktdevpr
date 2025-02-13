require 'sinatra'
require 'json'
require 'faker'

# run ruby data_mock.rb
# access http://localhost:4567/data_mock/reactors

# Enable CORS if needed
before do
  content_type :json
  headers 'Access-Control-Allow-Origin' => '*'
end

# Generate mock user data
get '/data_mock/reactors' do
  JSON.generate(
  	 {
 	    		id: Faker::Number.unique.number(digits: 5),
					name: "Reator #{Faker::Number.between(from: 1, to: 12)}",
					code: Faker::Number.unique.number(digits: 5),
					pressure: Faker::Number.within(range: 0.00..100.00),
					oxygen: Faker::Number.within(range: 0.000..100.000),
					temperature: Faker::Number.within(range: -50.00..150.00),
					ph: Faker::Number.within(range: 0.0..14.0),
					concentration: Faker::Number.within(range: 0.0..100.0),
					contaminants: Faker::Boolean.boolean(true_ratio: 0.2)
		 }
  )
end