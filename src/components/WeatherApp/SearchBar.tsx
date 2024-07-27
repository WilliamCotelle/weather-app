import React from 'react';
import styles from './WeatherApp.module.css';

const SearchBar = () => {
  return (
    <form className={styles.searchBar}>
      <div className={styles.searchInputWrapper}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3165774e2eee49faadc793ecc0e930e235a913c9149c8007a9edb52e118c2d55?apiKey=05838f7f259a426e89a3459802fa49d1&&apiKey=05838f7f259a426e89a3459802fa49d1"
          alt="Search"
          className={styles.searchIcon}
        />
        <input
          type="text"
          className={styles.searchText}
          placeholder="Recherchez votre ville"
        />
      </div>
      <button type="submit" className={styles.locateButton}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/25ba4c0560cf4f7e0315be4bc82aec24b1948909815b589d7a3d9d43ea5567ef?apiKey=05838f7f259a426e89a3459802fa49d1&&apiKey=05838f7f259a426e89a3459802fa49d1"
          alt="Locate"
          className={styles.locateIcon}
        />
        <span className={styles.locateText}>Se localiser</span>
      </button>
    </form>
  );
};

export default SearchBar;
