Photo Gallery for FEC Project created using REACT

To seed database:
Login to MySQL or use the connection script
In the MySQL shell run:  source ./database/schema.sql
Run seed script in the terminal

CRUD Routes

// CREATE 
Route: /api/add_photo
Requires a request body with a photo path, restaurant group id, and date for posting.

// READ
Route: /api/one_photo/:id
Requires a request paramater detailing the id of the photo being searched for.
Sends an object containing the id, photo path, restaurant id that photo belongs to, and the date inputted.

// UPDATE
Route: /api/update_photo
Requires the id of the record being updated as well as a new photo path to be passed into it.
Sends a status 200 on success.

// DELETE
Route: /api/delete_record
Requires the id of the record being deleted.
Sends a status 200 on success.


