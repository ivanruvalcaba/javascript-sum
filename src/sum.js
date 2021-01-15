/* Copyright (C) 2021  Iván Ruvalcaba  <ivanruvalcaba[at]disroot[dot]org>

This library is free software; you can redistribute it and/or modify it
under the terms of the GNU Lesser General Public License as published by
the Free Software Foundation; either version 3.0 of the License, or (at
your option) any later version.

This library is distributed in the hope that it will be useful, but
WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU Lesser
General Public License for more details.

You should have received a copy of the GNU Lesser General Public License
along with this library.  If not, see <http://www.gnu.org/licenses/>. */

/**
 * Function that performs the sum of two given numbers and returns its
 * result.
 * @param  {number} a First value by adding
 * @param  {number} b Second value by adding
 * @return {number}   Result of the summation
 */
const add = (a, b) => {
  return a + b
}

// Call the defined function
console.log('Sum of 12 and 34 is:', add(12, 34))
