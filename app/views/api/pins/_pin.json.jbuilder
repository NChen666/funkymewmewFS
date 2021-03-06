
json.extract! pin, :id, :user_id, :height, :title, :description
json.username pin.user.username
json.user pin.user
json.photo url_for(pin.user.photo) if pin.user.photo.attached?


json.imageUrl url_for(pin.image)
if(pin.boards.length > 0)
    json.board pin.boards[0].title
    json.boardId pin.boards[0].id
end