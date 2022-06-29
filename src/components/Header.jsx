import React from "react";


function Header() {
    return (
        <header>
            <nav class="navbar navbar-expand-lg bg-dark">
                <div class="container-fluid">

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav nav ms-auto">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">about me</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">resume</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">contact me</a>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
        </header>
    );
}

export default Header;