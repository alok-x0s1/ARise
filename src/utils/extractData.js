export function extractUserData(user) {
	if (!user) return null;

	return {
		uid: user.uid,
		displayName: user.displayName,
		email: user.email,
		photoURL: user.photoURL,
	};
}