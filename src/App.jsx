import { useState } from 'react';
import effect from './assets/images/effect.png';
import gitHubLogo from './assets/images/logo-github.png';
import squareEffect from './assets/images/square-effect.png';

function App() {
  const [userName, setUserName] = useState('');
  const [userData, setUserData] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = () => {
    setIsLoading(true); // Start loading
    setHasSearched(true);

    fetch(`https://api.github.com/users/${userName}`)
      .then(response => {
        if (!response.ok) throw new Error('User not found');
        return response.json();
      })
      .then(data => {
        // Artificial delay for smoother UX
        setTimeout(() => {
          setUserData(data);
          setIsLoading(false); // Stop loading after delay
        }, 1000);
      })
      .catch(error => {
        console.error(error);
        setTimeout(() => {
          setUserData(null);
          setIsLoading(false); // Stop loading on error too
        }, 1000);
      });
  };

  return (
    <div className='app'>
      <div className='app__main-container'>

        <div className='app__form'>
          <div className='app__form-title-container'>
            <img className='app__form-github-logo' src={gitHubLogo} alt="GitHub logo" />
            <h1 className='app__form-title'>Perfil <span className='app__form-title--highlight'>GitHub</span></h1>
          </div>
          <div className='app__form-search'>
            <input
              type="text"
              placeholder='Digite um usuário do Github'
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleSearch();
                }
              }}
            />
            <button onClick={handleSearch}>
              <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.1817 0C11.631 0.0643066 12.0835 0.111279 12.529 0.195898C14.6936 0.607031 16.5464 1.61221 18.0885 3.17886C19.4914 4.60405 20.4188 6.29736 20.817 8.26108C21.3175 10.7295 20.9722 13.0835 19.7351 15.2809C19.3389 15.9848 18.8377 16.6298 18.3847 17.3017C18.3419 17.3178 18.2992 17.3339 18.2564 17.35C18.3369 17.3915 18.4335 17.4163 18.4953 17.4768C20.5444 19.4878 22.5918 21.5007 24.6333 23.5194C24.7792 23.6636 24.8788 23.8543 25 24.0234V24.3652C24.8936 24.6819 24.6756 24.8872 24.3652 25H24.0234C23.8267 24.8615 23.6065 24.7469 23.4368 24.5808C21.3896 22.5771 19.35 20.5657 17.3082 18.5565C17.2566 18.5059 17.2025 18.4579 17.1398 18.3995C17.0692 18.4477 17.0014 18.4896 16.9383 18.5377C15.5811 19.5722 14.0595 20.2468 12.3818 20.5327C9.87446 20.9599 7.48838 20.5855 5.27173 19.3094C2.96553 17.9817 1.36572 16.06 0.509717 13.5335C0.255859 12.7841 0.10127 12.0118 0.0422363 11.2213C0.0375977 11.1585 0.0145508 11.0972 0 11.0352V9.66797C0.0149414 9.59766 0.0336426 9.52793 0.0441895 9.45698C0.105029 9.04746 0.141992 8.63296 0.227295 8.22866C0.635547 6.2939 1.54116 4.61934 2.92188 3.20737C4.47202 1.62222 6.33569 0.606836 8.51855 0.194238C8.94736 0.113135 9.38232 0.063916 9.8145 0H11.1817ZM1.61445 10.2985C1.63369 10.6609 1.63267 10.9635 1.66826 11.2618C1.89365 13.1501 2.61221 14.8245 3.92432 16.21C6.22021 18.6342 9.05664 19.5454 12.307 18.9131C15.1566 18.3587 17.2862 16.7189 18.5484 14.0819C19.8208 11.424 19.7434 8.7374 18.3187 6.16904C16.8584 3.53643 14.5546 2.03594 11.5669 1.66851C9.20781 1.37832 7.03818 1.95239 5.13687 3.39321C2.83711 5.13604 1.69321 7.48369 1.61445 10.2985Z" fill="white" />
              </svg>
            </button>
          </div>
        </div>

        {isLoading && (
          <div className="app__loading">
            <p>Loading...</p>
          </div>
        )}

        {userData && !isLoading && (
          <div className='app__content'>
            <div className='app__content-image'>
              <img src={userData.avatar_url} alt="User avatar" />
            </div>
            <div className='app__content-info'>
              <a className='app__user-link' href={userData.html_url} target="_blank">
                <h2 className='app__user-name'>{userData.name || userData.login}</h2>
              </a>
              <p className='app__user-bio'>{userData.bio || 'O usuário não possui bio'}</p>
            </div>
          </div>
        )}

        {!userData && hasSearched && !isLoading && (
          <div className='app__not-found'>
            <p>Nenhum perfil foi encontrado com ese nome de usuário.<br />Tente novamente.</p>
          </div>
        )}

        <div className='app__square-effect'>
          <img src={squareEffect} alt="visual square effect" />
        </div>
      </div>

      <div className='effect'>
        <img src={effect} alt="effect" />
      </div>

      <div className='effect-2'>
        <img src={effect} alt="effect" />
      </div>
    </div>
  );
}

export default App;
