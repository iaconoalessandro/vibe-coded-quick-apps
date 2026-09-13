/* ---------------------------------------------------------------------------
 * Applicant-reported outcomes for the IT & Computing track.
 *
 * GENERATED FILE — do not edit by hand.
 *   node tools/gradcafe-aggregate.js fetch && node tools/gradcafe-aggregate.js build
 *
 * Source: results posted by applicants to TheGradCafe, decisions from January
 * 2021 onward. Aggregates only; no applicant's own text is reproduced here.
 *
 * Read these numbers for what they are. This is a self-selected sample of
 * people who chose to post an outcome, it skews international, and it is NOT
 * an acceptance rate — the denominator is "people who posted", not "people who
 * applied". Where a programme publishes a real rate, that is in the model file
 * with an OFF or FOI tag, and it is the figure that should be believed.
 *
 * Two deliberate silences:
 *
 *  - Figures are per INSTITUTION, not per programme. Applicants file under
 *    free-text course names and no institution here has enough reports to
 *    separate one MSc from another.
 *  - `gpa` is null below 40 reports. Most institutions here are below that
 *    bar, and a median from a dozen posts would be noise with a decimal point.
 *    Timing survives small samples in a way grades do not, so it is emitted
 *    from 8 reports up.
 *
 * Grades are reported on whatever scale the applicant used. Only values on a
 * 4-point scale are pooled; anything above 4.3 is counted in `gpaOffScale`
 * and excluded rather than converted by guesswork.
 * ------------------------------------------------------------------------- */

window.IT_EVIDENCE = {
  generated: "2026-09-12",
  source: 'TheGradCafe, applicant-reported results',
  minGpaN: 40,
  minAcceptedGpaN: 20,
  minTimingN: 8,
  schools: {
    "oxford-acs": {
      "institution": "University of Oxford",
      "scope": "institution",
      "window": "decisions reported since January 2021",
      "n": 54,
      "reported": {
        "accepted": 21,
        "rejected": 22,
        "waitlisted": 8
      },
      "gpaReported": 54,
      "timing": {
        "earliest": "2021-02-16",
        "median": "2022-03-07",
        "latest": "2026-03-14"
      },
      "gpa": null,
      "tier": "uk-most-selective",
      "src": "GC"
    },
    "cambridge-acs": {
      "institution": "University of Cambridge",
      "scope": "institution",
      "window": "decisions reported since January 2021",
      "n": 33,
      "reported": {
        "accepted": 11,
        "rejected": 8,
        "waitlisted": 3
      },
      "gpaReported": 33,
      "timing": {
        "earliest": "2021-01-04",
        "median": "2022-02-14",
        "latest": "2025-09-20"
      },
      "gpa": null,
      "tier": "uk-most-selective",
      "src": "GC"
    },
    "imperial-advcomp": {
      "institution": "Imperial College London",
      "scope": "institution",
      "window": "decisions reported since January 2021",
      "n": 23,
      "reported": {
        "accepted": 13,
        "rejected": 9,
        "waitlisted": 0
      },
      "gpaReported": 23,
      "timing": {
        "earliest": "2021-02-08",
        "median": "2023-03-20",
        "latest": "2026-02-11"
      },
      "gpa": null,
      "tier": "uk-most-selective",
      "src": "GC"
    },
    "imperial-aiml": {
      "institution": "Imperial College London",
      "scope": "institution",
      "window": "decisions reported since January 2021",
      "n": 23,
      "reported": {
        "accepted": 13,
        "rejected": 9,
        "waitlisted": 0
      },
      "gpaReported": 23,
      "timing": {
        "earliest": "2021-02-08",
        "median": "2023-03-20",
        "latest": "2026-02-11"
      },
      "gpa": null,
      "tier": "uk-most-selective",
      "src": "GC"
    },
    "imperial-computing": {
      "institution": "Imperial College London",
      "scope": "institution",
      "window": "decisions reported since January 2021",
      "n": 23,
      "reported": {
        "accepted": 13,
        "rejected": 9,
        "waitlisted": 0
      },
      "gpaReported": 23,
      "timing": {
        "earliest": "2021-02-08",
        "median": "2023-03-20",
        "latest": "2026-02-11"
      },
      "gpa": null,
      "tier": "uk-most-selective",
      "src": "GC"
    },
    "ucl-dsml": {
      "institution": "University College London",
      "scope": "institution",
      "window": "decisions reported since January 2021",
      "n": 23,
      "reported": {
        "accepted": 9,
        "rejected": 12,
        "waitlisted": 0
      },
      "gpaReported": 23,
      "timing": {
        "earliest": "2021-01-19",
        "median": "2021-03-16",
        "latest": "2026-02-09"
      },
      "gpa": null,
      "tier": "uk-selective",
      "src": "GC"
    },
    "ucl-cs-conv": {
      "institution": "University College London",
      "scope": "institution",
      "window": "decisions reported since January 2021",
      "n": 23,
      "reported": {
        "accepted": 9,
        "rejected": 12,
        "waitlisted": 0
      },
      "gpaReported": 23,
      "timing": {
        "earliest": "2021-01-19",
        "median": "2021-03-16",
        "latest": "2026-02-09"
      },
      "gpa": null,
      "tier": "uk-selective",
      "src": "GC"
    },
    "edinburgh-ai": {
      "institution": "University of Edinburgh",
      "scope": "institution",
      "window": "decisions reported since January 2021",
      "n": 23,
      "reported": {
        "accepted": 17,
        "rejected": 5,
        "waitlisted": 0
      },
      "gpaReported": 23,
      "timing": {
        "earliest": "2021-04-03",
        "median": "2023-11-13",
        "latest": "2026-03-20"
      },
      "gpa": null,
      "tier": "uk-selective",
      "src": "GC"
    },
    "edinburgh-informatics": {
      "institution": "University of Edinburgh",
      "scope": "institution",
      "window": "decisions reported since January 2021",
      "n": 23,
      "reported": {
        "accepted": 17,
        "rejected": 5,
        "waitlisted": 0
      },
      "gpaReported": 23,
      "timing": {
        "earliest": "2021-04-03",
        "median": "2023-11-13",
        "latest": "2026-03-20"
      },
      "gpa": null,
      "tier": "uk-selective",
      "src": "GC"
    },
    "kcl-ai": {
      "institution": "King's College London",
      "scope": "institution",
      "window": "decisions reported since January 2021",
      "n": 3,
      "reported": {
        "accepted": 2,
        "rejected": 1,
        "waitlisted": 0
      },
      "gpaReported": 3,
      "timing": null,
      "gpa": null,
      "tier": "uk-selective",
      "src": "GC"
    },
    "warwick-cs": {
      "institution": "University of Warwick",
      "scope": "institution",
      "window": "decisions reported since January 2021",
      "n": 0,
      "reported": {
        "accepted": 0,
        "rejected": 0,
        "waitlisted": 0
      },
      "gpaReported": 0,
      "timing": null,
      "gpa": null,
      "tier": "uk-selective",
      "src": "GC"
    },
    "manchester-acs": {
      "institution": "University of Manchester",
      "scope": "institution",
      "window": "decisions reported since January 2021",
      "n": 7,
      "reported": {
        "accepted": 3,
        "rejected": 4,
        "waitlisted": 0
      },
      "gpaReported": 7,
      "timing": null,
      "gpa": null,
      "tier": "uk-selective",
      "src": "GC"
    },
    "southampton-ai": {
      "institution": "University of Southampton",
      "scope": "institution",
      "window": "decisions reported since January 2021",
      "n": 1,
      "reported": {
        "accepted": 1,
        "rejected": 0,
        "waitlisted": 0
      },
      "gpaReported": 1,
      "timing": null,
      "gpa": null,
      "tier": "uk-selective",
      "src": "GC"
    },
    "bristol-cs-conv": {
      "institution": "University of Bristol",
      "scope": "institution",
      "window": "decisions reported since January 2021",
      "n": 2,
      "reported": {
        "accepted": 1,
        "rejected": 1,
        "waitlisted": 0
      },
      "gpaReported": 2,
      "timing": null,
      "gpa": null,
      "tier": "uk-selective",
      "src": "GC"
    },
    "glasgow-it": {
      "institution": "University of Glasgow",
      "scope": "institution",
      "window": "decisions reported since January 2021",
      "n": 1,
      "reported": {
        "accepted": 1,
        "rejected": 0,
        "waitlisted": 0
      },
      "gpaReported": 1,
      "timing": null,
      "gpa": null,
      "tier": "uk-selective",
      "src": "GC"
    },
    "standrews-cs-conv": {
      "institution": "University of St Andrews",
      "scope": "institution",
      "window": "decisions reported since January 2021",
      "n": 1,
      "reported": {
        "accepted": 1,
        "rejected": 0,
        "waitlisted": 0
      },
      "gpaReported": 1,
      "timing": null,
      "gpa": null,
      "tier": "uk-selective",
      "src": "GC"
    },
    "eth-cs": {
      "institution": "ETH Zürich",
      "scope": "institution",
      "window": "decisions reported since January 2021",
      "n": 340,
      "reported": {
        "accepted": 171,
        "rejected": 163,
        "waitlisted": 3
      },
      "gpaReported": 339,
      "timing": {
        "earliest": "2021-02-18",
        "median": "2024-03-04",
        "latest": "2026-06-11"
      },
      "gpa": {
        "accN": 120,
        "accMedian": 3.92,
        "accP25": 3.83,
        "accP75": 3.99,
        "rejN": 111,
        "rejMedian": 3.74
      },
      "tier": "eu-technical",
      "src": "GC"
    },
    "epfl-cs": {
      "institution": "EPFL",
      "scope": "institution",
      "window": "decisions reported since January 2021",
      "n": 72,
      "reported": {
        "accepted": 29,
        "rejected": 38,
        "waitlisted": 5
      },
      "gpaReported": 72,
      "timing": {
        "earliest": "2021-03-24",
        "median": "2023-03-16",
        "latest": "2026-06-03"
      },
      "gpa": {
        "accN": 25,
        "accMedian": 3.86,
        "accP25": 3.77,
        "accP75": 3.97,
        "rejN": 28,
        "rejMedian": 3.8
      },
      "tier": "eu-technical",
      "src": "GC"
    },
    "tudelft-cs": {
      "institution": "TU Delft",
      "scope": "institution",
      "window": "decisions reported since January 2021",
      "n": 20,
      "reported": {
        "accepted": 16,
        "rejected": 4,
        "waitlisted": 0
      },
      "gpaReported": 20,
      "timing": {
        "earliest": "2021-02-16",
        "median": "2023-03-29",
        "latest": "2026-03-18"
      },
      "gpa": null,
      "tier": "eu-technical",
      "src": "GC"
    },
    "tum-informatics": {
      "institution": "TU München",
      "scope": "institution",
      "window": "decisions reported since January 2021",
      "n": 3,
      "reported": {
        "accepted": 3,
        "rejected": 0,
        "waitlisted": 0
      },
      "gpaReported": 3,
      "timing": null,
      "gpa": null,
      "tier": "eu-technical",
      "src": "GC"
    },
    "kth-ml": {
      "institution": "KTH",
      "scope": "institution",
      "window": "decisions reported since January 2021",
      "n": 17,
      "reported": {
        "accepted": 8,
        "rejected": 2,
        "waitlisted": 7
      },
      "gpaReported": 17,
      "timing": {
        "earliest": "2021-04-09",
        "median": "2025-03-27",
        "latest": "2026-03-26"
      },
      "gpa": null,
      "tier": "eu-technical",
      "src": "GC"
    },
    "uva-ai": {
      "institution": "University of Amsterdam",
      "scope": "institution",
      "window": "decisions reported since January 2021",
      "n": 15,
      "reported": {
        "accepted": 15,
        "rejected": 0,
        "waitlisted": 0
      },
      "gpaReported": 15,
      "timing": {
        "earliest": "2021-02-18",
        "median": "2022-03-01",
        "latest": "2026-02-20"
      },
      "gpa": null,
      "tier": "eu-technical",
      "src": "GC"
    }
  },
  tiers: {
    "uk-most-selective": {
      "n": 110,
      "reported": {
        "accepted": 45,
        "rejected": 39,
        "waitlisted": 11
      },
      "gpaReported": 110,
      "gpaOffScale": 60,
      "timing": {
        "earliest": "2021-01-04",
        "median": "2022-03-07",
        "latest": "2026-03-14"
      },
      "gpa": {
        "accN": 25,
        "accMedian": 3.95,
        "accP25": 3.8,
        "accP75": 4,
        "rejN": 18,
        "rejMedian": 3.86
      }
    },
    "uk-selective": {
      "n": 61,
      "reported": {
        "accepted": 35,
        "rejected": 23,
        "waitlisted": 0
      },
      "gpaReported": 61,
      "gpaOffScale": 24,
      "timing": {
        "earliest": "2021-01-19",
        "median": "2023-01-20",
        "latest": "2026-03-20"
      },
      "gpa": {
        "accN": 21,
        "accMedian": 3.75,
        "accP25": 3.6,
        "accP75": 3.93,
        "rejN": 16,
        "rejMedian": 3.7
      }
    },
    "eu-technical": {
      "n": 467,
      "reported": {
        "accepted": 242,
        "rejected": 207,
        "waitlisted": 15
      },
      "gpaReported": 466,
      "gpaOffScale": 144,
      "timing": {
        "earliest": "2021-02-16",
        "median": "2023-03-29",
        "latest": "2026-06-11"
      },
      "gpa": {
        "accN": 175,
        "accMedian": 3.9,
        "accP25": 3.79,
        "accP75": 3.98,
        "rejN": 141,
        "rejMedian": 3.8
      }
    }
  }
};
