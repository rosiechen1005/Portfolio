# AgriCast-ML
**Cluster-Aware Climate Forecasting for U.S. Corn Yield**

Developed during the DAWN Internship (ESSIC, University of Maryland; USDA NIFA-funded).

An end-to-end machine learning system integrating 50+ years of USDA yield and meteorological data (1M+ records) to model Corn Belt production under heterogeneous climate regimes.

## What I Built

- Multi-decade ETL pipeline integrating USDA + NOAA data
- Spatial station–county joins and yield detrending
- Climate regime clustering (K-Means, 3 clusters)
- Seasonal aggregate + extreme-heat feature engineering
- Residual-stacked ensemble (Random Forest → XGBoost → MLP)
- PCA dimensionality reduction + MICE imputation
- HPC-based experimentation (Zaratan cluster)

## Results

- **R² improved from 0.30 → 0.76 (+150%)**
- Stable performance across three climate clusters
- Identified extreme heat anomalies as dominant yield drivers

## Tech Stack

Python · Pandas · NumPy · Scikit-learn · XGBoost · GeoPandas · PyTorch · HPC
