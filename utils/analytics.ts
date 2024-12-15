import ReactGA from 'react-ga';

export const initGA = ()=>{
    ReactGA.initialize('G-8G3SM5ERQ8', {debug:true}); //71YEK7BCQV
};

export const logPageView = () =>{
    ReactGA.set({page: window.location.pathname});
    ReactGA.pageview(window.location.pathname);
};