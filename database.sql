-- Database should be prime_feedback

-- Switch to "prime_feedback" before making:
-- Table to store the feedback
DROP TABLE IF EXISTS "feedback";
CREATE TABLE "feedback" (
  "id" serial primary key,
  "feeling" INT not null,
  "understanding" INT not null,
  "support" INT not null,
  "comments" text,
  "flagged" boolean default false,
  "date" date not null default CURRENT_DATE
); 

-- Sample feedback item
INSERT INTO "feedback" ("feeling", "understanding", "support", "comments", "flagged")
VALUES (8, 8, 10, 'Doing Great!', false),
(5, 6, 5, 'So-So', false), (2, 1, 3, 'Terrible!', true);
