 
 <template>
  <div class="one">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <router-link to="/">Weather / News</router-link>

            |
          </li>
          <li class="nav-item">
            <router-link to="/about">Add Note</router-link>
          </li>

          <li class="nav-item">
            <router-link to="/display">Notes</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>
 
  