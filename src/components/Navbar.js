import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

function CollapsibleExample() {
    return (
        <>
        <Navbar id='mynavbar' fixed="top" collapseOnSelect expand="lg" className="bg-body-tertiary pt-3" data-bs-theme="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#">DARSHAN'S FINANSE</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className="mx-3 btnHover" href="#">About</Nav.Link>
                        <Nav.Link className="mx-3 btnHover" href="#">Rewards</Nav.Link>
                        <Nav.Link className="mx-3 btnHover" href="#">Roadmap</Nav.Link>
                        <Nav.Link className="mx-3 btnHover" href="#">Community</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#">
                            <div className="d-flex ">
                                <Nav.Link className="navbar-connect-logos mx-4 btnHover" href="#">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M21.6343 4.03096C20.8193 4.41596 19.4323 5.13796 18.7353 5.27596C18.7083 5.28296 18.6863 5.29196 18.6603 5.29896C17.8473 4.49696 16.7333 3.99996 15.5003 3.99996C13.0153 3.99996 11.0003 6.01496 11.0003 8.49996C11.0003 8.63096 10.9893 8.87196 11.0003 8.99996C7.78232 8.99996 5.43232 7.32096 3.67332 5.16296C3.43832 4.87296 3.18832 5.02396 3.13632 5.22996C3.01932 5.69596 2.97932 6.47496 2.97932 7.03096C2.97932 8.43196 4.07432 9.80796 5.77932 10.661C5.46532 10.742 5.11932 10.8 4.75932 10.8C4.33532 10.8 3.84732 10.689 3.42032 10.465C3.26232 10.382 2.92132 10.405 3.02232 10.809C3.42732 12.428 5.27532 13.565 6.92632 13.896C6.55132 14.117 5.75132 14.072 5.38332 14.072C5.24732 14.072 4.77432 14.04 4.46832 14.002C4.18932 13.968 3.76032 14.04 4.11932 14.584C4.89032 15.751 6.63432 16.484 8.13532 16.512C6.75332 17.596 4.49332 17.992 2.32832 17.992C1.89032 17.982 1.91232 18.481 2.26532 18.666C3.86232 19.504 6.47832 20 8.34732 20C15.7773 20 20.0003 14.337 20.0003 8.99896C20.0003 8.91296 19.9983 8.73296 19.9953 8.55196C19.9953 8.53396 20.0003 8.51696 20.0003 8.49896C20.0003 8.47196 19.9923 8.44596 19.9923 8.41896C19.9893 8.28296 19.9863 8.15596 19.9833 8.08996C20.5723 7.66496 21.4743 6.92696 21.9303 6.36196C22.0853 6.16996 21.9603 5.93696 21.7493 6.00996C21.2063 6.19896 20.2673 6.56496 19.6793 6.63496C20.8563 5.85596 21.4383 5.17796 21.9383 4.42496C22.1093 4.16796 21.8953 3.90696 21.6343 4.03096Z" fill="currentColor"></path></svg></Nav.Link>
                                <Nav.Link className="navbar-connect-logos mx-4 btnHover" href="#">
                                    <svg width="24" height="24" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M29.97 8.53493C27.45 6.52493 23.85 5.96993 22.29 5.80493H22.23C21.99 5.80493 21.765 5.93993 21.69 6.16493C21.555 6.50993 21.765 6.88493 22.11 6.94493C23.865 7.30493 25.89 7.93493 27.735 9.08993C28.11 9.31493 28.2 9.82493 27.9 10.1699C27.66 10.4399 27.255 10.4699 26.94 10.2899C23.34 8.06993 18.87 7.94993 18 7.94993C17.13 7.94993 12.66 8.06993 9.06 10.2899C8.745 10.4699 8.34 10.4399 8.1 10.1699C7.8 9.82493 7.89 9.31493 8.265 9.08993C10.11 7.93493 12.135 7.30493 13.89 6.94493C14.235 6.88493 14.445 6.50993 14.31 6.16493C14.235 5.93993 14.01 5.80493 13.77 5.80493H13.71C12.15 5.96993 8.55 6.52493 6.03 8.53493C4.56 9.89993 1.635 17.7449 1.5 24.6899C1.5 25.1549 1.62 25.6199 1.89 25.9949C3.645 28.4699 7.455 29.9549 10.335 30.1649C10.77 30.1949 11.19 29.9999 11.445 29.6399C11.46 29.6399 11.46 29.6249 11.475 29.6099C12 28.8899 11.685 27.8699 10.845 27.5549C8.445 26.6699 7.215 25.6199 7.14 25.5449C6.84 25.2749 6.81 24.8249 7.065 24.5249C7.335 24.2249 7.785 24.1949 8.085 24.4649C8.13 24.4949 11.46 27.3299 18 27.3299C24.54 27.3299 27.87 24.4949 27.915 24.4649C28.215 24.1949 28.665 24.2249 28.935 24.5249C29.19 24.8249 29.16 25.2749 28.86 25.5449C28.785 25.6199 27.555 26.6699 25.155 27.5549C24.315 27.8699 24 28.8899 24.525 29.6099C24.54 29.6249 24.54 29.6399 24.555 29.6399C24.81 29.9999 25.23 30.1949 25.665 30.1649C28.545 29.9549 32.355 28.4699 34.11 25.9949C34.38 25.6199 34.5 25.1549 34.5 24.6899C34.365 17.7449 31.44 9.89993 29.97 8.53493ZM13.335 22.3049C11.955 22.3049 10.83 21.0149 10.83 19.4399C10.83 17.8499 11.955 16.5599 13.335 16.5599C14.73 16.5599 15.84 17.8499 15.84 19.4399C15.84 21.0149 14.73 22.3049 13.335 22.3049ZM22.665 22.3049C21.27 22.3049 20.16 21.0149 20.16 19.4399C20.16 17.8499 21.27 16.5599 22.665 16.5599C24.045 16.5599 25.17 17.8499 25.17 19.4399C25.17 21.0149 24.045 22.3049 22.665 22.3049Z" fill="currentColor"></path><defs><linearGradient id="paint0_linear_3687_20554" x1="1.5" y1="17.9864" x2="34.5" y2="17.9864" gradientUnits="userSpaceOnUse"><stop stopColor="#D6E1FF"></stop><stop offset="1" stopColor="#D6E1FF"></stop></linearGradient></defs></svg></Nav.Link>
                                <Nav.Link className="navbar-connect-logos mx-4 btnHover" href="#">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="logo/social/telegram"><path id="shape" fillRule="evenodd" clipRule="evenodd" d="M3.80615 10.6018C8.90641 8.37206 12.3074 6.90207 14.0091 6.19185C18.8677 4.16401 19.8773 3.81176 20.5354 3.80013C20.6801 3.79757 21.0037 3.83356 21.2133 4.00423C21.3903 4.14835 21.439 4.34302 21.4623 4.47966C21.4856 4.6163 21.5146 4.92756 21.4916 5.17076C21.2283 7.94671 20.089 14.6832 19.5094 17.7923C19.2642 19.1079 18.7813 19.549 18.3138 19.5922C17.2978 19.686 16.5263 18.9184 15.5422 18.2712C14.0024 17.2583 13.1325 16.6278 11.6378 15.6395C9.9105 14.4973 11.0303 13.8695 12.0147 12.8435C12.2723 12.575 16.7488 8.48932 16.8354 8.11868C16.8463 8.07233 16.8563 7.89954 16.754 7.8083C16.6517 7.71706 16.5007 7.74826 16.3918 7.77308C16.2373 7.80825 13.7775 9.43974 9.01212 12.6675C8.31389 13.1486 7.68145 13.3831 7.11481 13.3708C6.49014 13.3572 5.28851 13.0164 4.39523 12.725C3.29958 12.3676 2.42878 12.1787 2.5046 11.5717C2.5441 11.2556 2.97795 10.9323 3.80615 10.6018Z" fill="currentColor"></path></g></svg>
                                </Nav.Link>
                                <Nav.Link className="navbar-connect-logos mx-4 btnHover" href="#">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="logo/social/medium"><path id="shape" d="M7 5.5C6.08075 5.5 5.1705 5.68106 4.32122 6.03284C3.47194 6.38463 2.70026 6.90024 2.05025 7.55025C1.40024 8.20026 0.884626 8.97194 0.532843 9.82122C0.18106 10.6705 0 11.5807 0 12.5C0 13.4193 0.18106 14.3295 0.532843 15.1788C0.884626 16.0281 1.40024 16.7997 2.05025 17.4497C2.70026 18.0998 3.47194 18.6154 4.32122 18.9672C5.1705 19.3189 6.08075 19.5 7 19.5C7.91925 19.5 8.8295 19.3189 9.67878 18.9672C10.5281 18.6154 11.2997 18.0998 11.9497 17.4497C12.5998 16.7997 13.1154 16.0281 13.4672 15.1788C13.8189 14.3295 14 13.4193 14 12.5C14 11.5807 13.8189 10.6705 13.4672 9.82122C13.1154 8.97194 12.5998 8.20026 11.9497 7.55025C11.2997 6.90024 10.5281 6.38463 9.67878 6.03284C8.8295 5.68106 7.91925 5.5 7 5.5ZM18 6C17.2044 6 16.4413 6.68482 15.8787 7.90381C15.3161 9.12279 15 10.7761 15 12.5C15 14.2239 15.3161 15.8772 15.8787 17.0962C16.4413 18.3152 17.2044 19 18 19C18.7956 19 19.5587 18.3152 20.1213 17.0962C20.6839 15.8772 21 14.2239 21 12.5C21 10.7761 20.6839 9.12279 20.1213 7.90381C19.5587 6.68482 18.7956 6 18 6ZM23 7.5C22.7348 7.5 22.4804 8.02678 22.2929 8.96447C22.1054 9.90215 22 11.1739 22 12.5C22 13.8261 22.1054 15.0979 22.2929 16.0355C22.4804 16.9732 22.7348 17.5 23 17.5C23.2652 17.5 23.5196 16.9732 23.7071 16.0355C23.8946 15.0979 24 13.8261 24 12.5C24 11.1739 23.8946 9.90215 23.7071 8.96447C23.5196 8.02678 23.2652 7.5 23 7.5Z" fill="currentColor"></path></g></svg></Nav.Link>
                                <div className="">
                                    <Button className="navLaunchBtn launchBtn" variant="primary">Launch App (Testnet)</Button>
                                </div>
                            </div>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    );
}

export default CollapsibleExample;