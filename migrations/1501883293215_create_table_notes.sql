-- up
CREATE TABLE notes (
  id          serial,
  note_text   text
);
---
DROP TABLE IF EXISTS notes;
-- down
