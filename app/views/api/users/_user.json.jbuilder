# json.extract! user, :id, :username ,:email,
json.currentUser do
  json.username user.username
  json.email user.email
end
