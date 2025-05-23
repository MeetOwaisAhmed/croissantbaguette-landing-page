# drop_lovable.py
def commit_callback(commit):
    # Remove any commit whose author_email is the bot’s
    if commit.author_email == b"lovable-dev[bot]@users.noreply.github.com":
        commit.skip = True
