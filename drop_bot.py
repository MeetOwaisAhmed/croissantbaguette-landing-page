# drop_bot.py
def commit_callback(commit):
    # drop any commit whose author_name exactly matches lovable-dev[bot]
    if commit.author_name == b"lovable-dev[bot]":
        commit.skip_commit = True
