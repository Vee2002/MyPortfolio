# A list of users and their details
user1 = {
    "username": "Vivian",
    "password": "vee@90",
    "email": "kerubomosomi7@gmail.com"

}
user1 = {
    "username": "Jackline",
    "password": "jacky1512",
    "email": "jacklinendubi78@gmail.com"

}
user2 = {
    "username": "Kepha",
    "password": "Kepha#4444",
    "email": "kephamosomi44@gmail.com"

}
user3 = {
    "username": "Mercy",
    "password": "Mercy.19",
    "email": "mercygitahi200@gmail.com"

}
user4 = {
    "username": "Del",
    "password": "Del20ndegua",
    "email": "ndegua@gmail.com",
}

#create an array named users to hold these user details
users = [user1, user2, user3, user4]

def authenticate_user(username,password,users_list):
    print("AUTHENTICATING YOU...")
    for user in users_list:
        print(user.get("username"))
        print(user.get("password"))
        if username == user.get("username") and password == user.get("password"):
            print(f"Hello {username},welcome")
            return True
    print("Incorrect username or password")
    return False


def add_user():
    print("SIGNING YOU UP...")
    username = input("Input your username: ")
    password = input("Input your password: ")
    email = input("Input your email: ")

    new_user = {
        "username": username,
        "password": password,
        "email": email,
    }

    users.append(new_user)

    print(users)

    authenticate_user(username,password,users)

def login():
    print("LOGIN TO YOUR ACCOUNT")
    username = input("Input your username:")
    password = input("Input your password:")

    authenticate_user(username,password,users)

print("WELCOME TO AUTH")
print("1. LOGIN")
print("2. SIGN UP")

auth_option = (input("Please input a number"))

if auth_option == "1":
    login()
elif auth_option == "2":
    add_user()
else:
    print("Invalid selection")

