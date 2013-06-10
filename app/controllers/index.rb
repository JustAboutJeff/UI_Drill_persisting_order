get '/' do
  @ordered_items = Item.order(:position)
  erb :index
end

post '/' do
  params.each_pair do |text, index|
    puts Item.find_or_create_by_name(name: text )
    .update_attributes(position: index)
  end
end