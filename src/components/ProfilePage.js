const ProfilePage = ({ location }) => {
  const { state } = location;

  return (
    <div>
      <h1>Other Page</h1>
      {state && state.loginDetails && (
        <div>
          <h2>Login Details:</h2>
          <pre>{JSON.stringify(state.loginDetails, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};
export default ProfilePage;